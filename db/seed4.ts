import {PrismaClient,LeaveType} from "@/lib/generated/prisma";
const prisma = new PrismaClient();
async function main() {
    const doctorIds = [
        "10d7ec83-253f-41fd-83c8-372bc492f75e",
        "5f84de0c-8b27-4c1d-a99d-b813e16e87bf",
        "cb1f8b99-ddff-44c1-be16-ec1a36680dbd"

    ];
    const leaveDate=new Date("2025-12-25T00:00:00Z");
    console.log("Setting leaves for doctors...");
    await prisma.doctorLeave.create({
        data: {
            doctorId: doctorIds[0],
            leaveDate: leaveDate,
            leaveType: LeaveType.FULL_DAY,
            reason: "Christmas Holiday",

        },
    });
    console.log(`Set FULL_DAY leave for doctor ${doctorIds[0]} on ${leaveDate.toDateString()}`);
    await prisma.doctorLeave.create({
        data: {
            doctorId: doctorIds[1],
            leaveDate: leaveDate,
            leaveType: LeaveType.MORNING,
            reason: "Personal leave",

        },
    });
    console.log(`Set MORNING leave for doctor ${doctorIds[1]} on ${leaveDate.toDateString()}`);
    await prisma.doctorLeave.create({
        data: {
            doctorId: doctorIds[2],
            leaveDate: leaveDate,
            leaveType: LeaveType.AFTERNOON,
            reason: "Personal leave",

        },
    });
    console.log(`Set AFTERNOON leave for doctor ${doctorIds[2]} on ${leaveDate.toDateString()}`);
    console.log("Leave setting finished.");


}





main()
 .catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();

})