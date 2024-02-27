const BasePath = "http://13.58.134.250:8003/";


const Api = {
    ApiRegisterUser:`${BasePath}api/users/register`,
    ApiLoginUser:`${BasePath}api/users/login`,
    ApiUpdateProfile:`${BasePath}api/users/update_profile`,
    ApiUpdateGoals:`${BasePath}api/users/update_goals`,
    ApiGetProfile:`${BasePath}api/users/get_profile`,
    ApiCheckIn:`${BasePath}api/users/checkin`,
    ApiAddJournal:`${BasePath}api/journal/add_journal`,
    ApiGetUserJournal:`${BasePath}api/journal/get_user_journals`,
    ApiGetMoodsList:`${BasePath}api/journal/get_moods_list`,
    ApiAnalyzeJournal:`${BasePath}api/journal/analyze_journal`,
}

export default Api;
