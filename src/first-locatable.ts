var locatePath = require("locate-path");

type FirstLocatable = (pathList:string[]) => Promise<string|undefined>

export const firstLocatable:FirstLocatable = locatePath