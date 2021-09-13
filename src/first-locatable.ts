//var locatePath = require("locate-path");

const fs = require('fs-extra');

type FirstLocatable = (pathList:string[]) => Promise<string|undefined>

export const firstLocatable: FirstLocatable = async (pathList:string[])=>pathList.find((path)=>fs.existsSync(path));