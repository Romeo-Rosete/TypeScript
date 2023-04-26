currentDirectory:: /user/username/projects/myproject useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/myproject/a.ts]
interface Document {
    fullscreen: boolean;
}
var y: number;

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface Document {
    readonly fullscreen: boolean;
}


/a/lib/tsc.js -w /user/username/projects/myproject/a.ts --skipLibCheck
Output::
>> Screen clear
[[90m12:00:19 AM[0m] Starting compilation in watch mode...

[96ma.ts[0m:[93m2[0m:[93m5[0m - [91merror[0m[90m TS2687: [0mAll declarations of 'fullscreen' must have identical modifiers.

[7m2[0m     fullscreen: boolean;
[7m [0m [91m    ~~~~~~~~~~[0m

[[90m12:00:22 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"watch":true,"skipLibCheck":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/a.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
var y;



Change:: Remove document declaration from file

Input::
//// [/user/username/projects/myproject/a.ts]
var x: string;
var y: number;


Before running Timeout callback:: count: 1
1: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:00:26 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:30 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"watch":true,"skipLibCheck":true}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
var x;
var y;



Change:: Rever the file to contain document declaration

Input::
//// [/user/username/projects/myproject/a.ts]
interface Document {
    fullscreen: boolean;
}
var y: number;


Before running Timeout callback:: count: 1
2: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:00:34 AM[0m] File change detected. Starting incremental compilation...

[96ma.ts[0m:[93m2[0m:[93m5[0m - [91merror[0m[90m TS2687: [0mAll declarations of 'fullscreen' must have identical modifiers.

[7m2[0m     fullscreen: boolean;
[7m [0m [91m    ~~~~~~~~~~[0m

[[90m12:00:38 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"watch":true,"skipLibCheck":true}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
var y;


