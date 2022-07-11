//* node-graphql-lesson-04/src/resolvers/mutation.js

import prisma from "../prisma/database";

const Mutation = {
    registerStudent: (args: any) => {
        return prisma.student.create({
            data: {
                email: args.email,
                fullName: args.fullName,
                dept: args.deptId && {
                    connect: { id: args.deptId },
                },
            },
        });
    },
    enroll: (args: any) => {
        return prisma.student.update({
            where: { id: Number(args.id) },
            data: {
                enrolled: true,
            },
        });
    },

    createTeacher: (args: any) => {
        return prisma.teacher.create({
            data: {
                email: args.data.email,
                fullName: args.data.fullName,
                courses: {
                    create: args.data.courses,
                },
            },
        });
    },

    createCourse: (args: any) => {
        console.log(args)
        return prisma.course.create({
            data: {
                code: args.code,
                title: args.title,
                teacher: args.teacherEmail && {
                    connect: { email: args.teacherEmail },
                },
            },
        });
    },

    createDepartment: (args: any) => {
        return prisma.department.create({
            data: {
                name: args.name,
                description: args.description,
            },
        });
    },
};

export default Mutation;
