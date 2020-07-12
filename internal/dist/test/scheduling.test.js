"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zora_1 = require("zora");
zora_1.test('Scheduling', async (t) => {
    const wait = async (func, name) => {
        let tid;
        const promise = new Promise((resolve) => {
            tid = func(() => resolve(true), 500);
        });
        t.eq(typeof tid, 'number', `${name} returns a task id`);
        const value = promise.catch(t.fail);
        t.ok(value, `${name} resolves`);
        return tid;
    };
    await wait(setTimeout, 'setTimeout');
    const tid = await wait(setInterval, 'setInterval');
    const taskCount = server.scheduler.pendingTasks.size();
    clearInterval(tid);
    const newTaskCount = server.scheduler.pendingTasks.size();
    t.eq(taskCount - 1, newTaskCount, 'clearInterval cancels task');
});
