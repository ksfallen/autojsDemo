importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Bitmap);
importClass(android.util.DisplayMetrics)
var name = rawInput("请输入你想要获取的应用图标的应用名", "QQ");
packageName = app.getPackageName(name);
pm = context.getPackageManager();
appInfo = pm.getApplicationInfo(packageName, 0);
bmp = appInfo.loadIcon(pm).getBitmap();
files.create("/sdcard/"+name+".jpg");
f = new File("/sdcard/"+name+"qq.jpg");
fOut = new FileOutputStream(f);
bmp.compress(Bitmap.CompressFormat.JPEG, 100, fOut);
fOut.flush();
fOut.close();
app.viewFile("sdcard/"+name+".jpg")

// 获取app安装时间153.js
importClass(android.content.pm.PackageManager)
installed = context.getPackageManager().getPackageInfo(context.getPackag‌​eName(), 0).firstInstallTime
log(installed)

/**
 * 获取指定应用的版本号
 * @param {string} packageName 应用包名
 */
function getPackageVersion(packageName) {
    importPackage(android.content);
    var pckMan = context.getPackageManager();
    var packageInfo = pckMan.getPackageInfo(packageName, 0);
    return packageInfo.versionName;
}

// 打开app安装界面.js
path = '/storage/emulated/0/backups/apps/MD配色参考_1.1.4.apk'
app.startActivity({
    data: "file://" + path,
    type: "application/vnd.android.package-archive",
    action: "VIEW",
    flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
})

//  最新安装的app176.js
var pm = context.getPackageManager()
var appList=pm.getInstalledApplications(0)
var appInfoList=[]
for(let i=0;i<appList.size();i++){
    var app=appList.get(i)
    var appInfo={
        appName:app.loadLabel(pm),
        packageName:app.packageName,
        isSystemApp:app.isSystemApp(),
        firstInstallTime:pm.getPackageInfo(app.packageName,0).firstInstallTime
    }
    appInfoList.push(appInfo)
}
appInfoList.sort((a,b)=>{
    return b.firstInstallTime-a.firstInstallTime
})
log('最新安装的app是=%j',appInfoList[0])


// 结束autojs自己.js
var nowPid = android.os.Process.myPid();
var am = context.getSystemService(java.lang.Class.forName("android.app.ActivityManager"));
var list = am.getRunningAppProcesses();
for(var i=0;i<list.size();i++){
    var info = list.get(i)
    if(info.pid != nowPid){
        kill(info.pid);
    }
}
kill(nowPid);
function kill(pid){
    android.os.Process.killProcess(pid);
}
