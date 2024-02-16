const BasePath = "http://178.16.143.212:8003/";


const Api = {
    ApiRegisterUser:`${BasePath}api/users/register`,
    ApiLoginUser:`${BasePath}api/users/login`,
    ApiUpdateProfile:`${BasePath}api/users/update_profile`,
    ApiUpdateGoals:`${BasePath}api/users/update_goals`,
    ApiGetProfile:`${BasePath}api/users/get_profile`,
    ApiCheckIn:`${BasePath}api/users/checkin`,
}

export default Api;
