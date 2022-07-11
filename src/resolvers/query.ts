//* node-graphql-lesson-04/src/resolvers/query.js

import prisma from "../prisma/database";

const Query = {
    enrollment: (args: any) => {
        return prisma.student.findMany({
            where: { enrolled: true },
        });
    },
    student: (args: any) => {
        return prisma.student.findFirst({
            where: { id: Number(args.id) },
        });
    },

    students: (args: any) => {
        return prisma.student.findMany({});
    },

    departments: (args: any) => {
        return prisma.department.findMany({});
    },

    department: (args: any) => {
        return prisma.department.findFirst({
            where: { id: Number(args.id) },
        });
    },

    courses: (args: any) => {
        return prisma.course.findMany({});
    },

    course: (args: any) => {
        return prisma.course.findFirst({
            where: { id: Number(args.id) },
        });
    },

    teachers: (args: any) => {
        return prisma.teacher.findMany({});
    },

    teacher: (args: any) => {
        return prisma.teacher.findFirst({
            where: { id: Number(args.id) },
        });
    },
};

export default Query;
