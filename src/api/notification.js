import { localAxios } from "@/util/http-commons";
import api from "../util/axios-common";
const local = localAxios();

async function send(notiObject, success, fail){
    await api.post("/notify/"+notiObject.receiver, notiObject).then(success).catch(fail);
}

async function findAllUnreadNotificationByUserId(userId, success, fail){
    await api.get("/notify/"+userId).then(success).catch(fail);
}

async function findAllNotificationByUserId(userId, success, fail){
    await api.get("/notify/list/"+userId).then(success).catch(fail);
}

async function readNotificationByNotificationId(notificationId, success, fail){
    await api.put("/notify/"+notificationId).then(success).catch(fail);
}

async function deleteNotificationByNotificationId(notificationId, success, fail){
    await api.delete("/notify/"+notificationId).then(success).catch(fail);
}

export {send, 
    findAllUnreadNotificationByUserId, 
    findAllNotificationByUserId,
    readNotificationByNotificationId,
    deleteNotificationByNotificationId
}; 