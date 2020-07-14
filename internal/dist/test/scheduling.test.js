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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGluZy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9zY2hlZHVsaW5nLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFFNUIsV0FBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDN0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUNoQixJQUE0QyxFQUM1QyxJQUFZLEVBQ1osRUFBRTtRQUNGLElBQUksR0FBdUIsQ0FBQztRQUM1QixNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBVSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQy9DLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLENBQUM7UUFDeEQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0lBRUYsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNuRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2RCxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLFlBQVksRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0FBQ2xFLENBQUMsQ0FBQyxDQUFDIn0=