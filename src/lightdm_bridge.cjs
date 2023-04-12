const gi = require('node-gtk');
const fs = require('fs');
const LightDM = gi.require('LightDM', '1');

const LightDMGreeter = new LightDM.Greeter();
const userList = new LightDM.UserList();
try {
  //LightDMGreeter.setResettable(true);
  LightDMGreeter.connectToDaemonSync();

} catch (exception) {
  console.log(exception)
};

function getUsers() {
  return userList.getUsers().map((user) => {
    let dataDir = LightDMGreeter.ensureSharedDataDirSync(user.name);
    let imagePath = user.getImage();
    let image;
    if (fs.existsSync(imagePath)) {
      let imageData = fs.readFileSync(imagePath);
      let base64Image = imageData.toString('base64');
      image = "data:image;base64,".concat(base64Image);
    } else {

    }
    return {
      'name': user.getName(),
      'realName': user.getRealName(),
      'displayName': user.getDisplayName(),
      'homeDirectory': user.getHomeDirectory(),
      'image': image,
      'background': user.getBackground(),
      'language': user.getLanguage(),
      'layout': user.getLayout(),
      'layouts': user.getLayouts(),
      'session': user.getSession(),
      'loggedIn': user.getLoggedIn(),
      'hasMessages': user.getHasMessages(),
      'uid': user.getUid()
    }
  })
}
function getLanguages() {
  const langs = new LightDM.getLanguages();
  return langs.map((obj) => {
    return {
      'code': obj.getCode(),
      'name': obj.getName(),
      'territory': obj.getTerritory(),
    }
  });
}
function getSessions() {
  const sessions = LightDM.getSessions();
  return sessions.map((session) => {
    return {
      'key': session.getKey(),
      'sessionType': session.getSessionType(),
      'name': session.getName(),
      'comment': session.getComment()
    }
  })
}
function shutdown() {
  if (LightDM.getCanShutdown()) {
    LightDM.shutdown()
  } else {
    console.log('error! not authorized to perform a system shutdown')
  }
}
function suspend() {
  if (LightDM.getCanSuspend()) {
    LightDM.suspend()
  } else {
    console.log('error! not authorized to perform a system suspend')
  }
}
function restart() {
  if (LightDM.getCanRestart()) {
    LightDM.restart()
  } else {
    console.log('error! not authorized to perform a system restart')
  }
}

function hibernate() {
  if (LightDM.getCanHibernate()) {
    LightDM.hibernate()
  } else {
    console.log('error! not authorized to perform a system hibernation')
  }
}
function getExtras() {
  return {
    'osName': LightDM.getOsName(),
    'osPrettyName': LightDM.getOsPrettyName(),
    'osVersion': LightDM.getOsVersion(),
    'osId': LightDM.getOsId()
  }
}

module.exports = { getUsers, getSessions, getLanguages, shutdown, restart, hibernate, suspend }
// [Object: null prototype] {
//   GREETER_SIGNAL_AUTHENTICATION_COMPLETE: 'authentication-complete',
//   GREETER_SIGNAL_AUTOLOGIN_TIMER_EXPIRED: 'autologin-timer-expired',
//   GREETER_SIGNAL_IDLE: 'idle',
//   GREETER_SIGNAL_RESET: 'reset',
//   GREETER_SIGNAL_SHOW_MESSAGE: 'show-message',
//   GREETER_SIGNAL_SHOW_PROMPT: 'show-prompt',
//   Greeter: [Function: LightDMGreeter],
//   GreeterError: {
//     COMMUNICATION_ERROR: 0,
//     CONNECTION_FAILED: 1,
//     SESSION_FAILED: 2,
//     NO_AUTOLOGIN: 3,
//     INVALID_USER: 4
//   },
//   Language: [Function: LightDMLanguage],
//   Layout: [Function: LightDMLayout],
//   MessageType: { INFO: 0, ERROR: 1 },
//   PromptType: { QUESTION: 0, SECRET: 1 },
//   SIGNAL_USER_CHANGED: 'changed',
//   Session: [Function: LightDMSession],
//   USER_LIST_SIGNAL_USER_ADDED: 'user-added',
//   USER_LIST_SIGNAL_USER_CHANGED: 'user-changed',
//   USER_LIST_SIGNAL_USER_REMOVED: 'user-removed',
//   User: [Function: LightDMUser],
//   UserList: [Function: LightDMUserList],
//   getCanHibernate: [Function: lightdm_get_can_hibernate],
//   getCanRestart: [Function: lightdm_get_can_restart],
//   getCanShutdown: [Function: lightdm_get_can_shutdown],
//   getCanSuspend: [Function: lightdm_get_can_suspend],
//   getHostname: [Function: lightdm_get_hostname],
//   getLanguage: [Function: lightdm_get_language],
//   getLanguages: [Function: lightdm_get_languages],
//   getLayout: [Function: lightdm_get_layout],
//   getLayouts: [Function: lightdm_get_layouts],
//   getMotd: [Function: lightdm_get_motd],
//   getOsId: [Function: lightdm_get_os_id],
//   getOsName: [Function: lightdm_get_os_name],
//   getOsPrettyName: [Function: lightdm_get_os_pretty_name],
//   getOsVersion: [Function: lightdm_get_os_version],
//   getOsVersionId: [Function: lightdm_get_os_version_id],
//   getRemoteSessions: [Function: lightdm_get_remote_sessions],
//   getSessions: [Function: lightdm_get_sessions],
//   greeterErrorQuark: [Function: lightdm_greeter_error_quark],
//   hibernate: [Function: lightdm_hibernate],
//   restart: [Function: lightdm_restart],
//   setLayout: [Function: lightdm_set_layout],
//   shutdown: [Function: lightdm_shutdown],
//   suspend: [Function: lightdm_suspend]
// }

