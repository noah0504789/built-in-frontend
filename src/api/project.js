import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function findAllProjectInfosByTeamId(teamId, success, fail){
    await local.get("/build/project/"+teamId).then(success).catch(fail);
}

async function findUsedProjectInfosByTeamId(teamId, success, fail){
    await local.get("/build/project/use/"+teamId).then(success).catch(fail);
}

async function insertNewProjectInfo(teamId, success, fail){
    await local.post("/build/project/"+teamId).then(success).catch(fail);
}

async function saveBackendConfigs(projectInfoId, backendConfigs, success, fail){
    await local.post("/build/project/backend/"+projectInfoId, backendConfigs).then(success).catch(fail);
}

async function saveFrontendConfigs(projectInfoId, frontendConfigs, success, fail){
    await local.post("/build/project/frontend/"+projectInfoId, frontendConfigs).then(success).catch(fail);
}

async function saveDatabaseConfigs(projectInfoId, databaseConfigs, success, fail){
    await local.post("/build/project/database/"+projectInfoId, databaseConfigs).then(success).catch(fail);
}

async function buildStart(teamId, projectInfoId, success, fail){
    await local.post("/build/deploy/"+teamId+"/"+projectInfoId).then(success).catch(fail);
}

async function findNPrevLogs(dataObject, success, fail){
    await local.get("/log/"+dataObject.serviceScheduleId+"/"+dataObject.projectInfoId+"/"+dataObject.configId+"?type="+dataObject.type)
    .then(success).catch(fail);
}

async function addDynamicListener(dataObject, success, fail){
    local.get("/log/active/"+dataObject.serviceScheduleId+"/"+dataObject.projectInfoId+"/"+dataObject.configId+"?type="+dataObject.type)
    .then(success).catch(fail);
}

export {findAllProjectInfosByTeamId,
    findUsedProjectInfosByTeamId,
    insertNewProjectInfo, 
    saveBackendConfigs, 
    saveFrontendConfigs, 
    saveDatabaseConfigs, 
    buildStart,
    findNPrevLogs,
    addDynamicListener
};