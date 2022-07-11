//* node-graphql-lesson-04/src/resolvers/index.js

import prisma from "../prisma/database";
import Query from "./query";
import Mutation from "./mutation";


const Student = {
    id: (parent: any, args: any, context: any, info: any) => parent.id,
    email: (parent: any) => parent.email,
    fullName: (parent: any) => parent.fullName,
    enrolled: (parent: any) => parent.enrolled,
    dept: (parent: any, args: any) => {
        return prisma.department.findFirst({
            where: { id: parent.dept },
        });
    },
};

const Department = {
    id: (parent: any) => parent.id,
    name: (parent: any) => parent.name,
    description: (parent: any) => parent.description,
    students: (parent: any, args: any) => {
        return prisma.department.findUnique({
            where: { id: parent.id },
        }).students();
    },
    courses: (parent: any, args: any) => {
        return prisma.department.findUnique({
            where: { id: parent.id },
        }).courses();
    },
};

const Teacher = {
    id: (parent: any) => parent.id,
    email: (parent: any) => parent.email,
    fullName: (parent: any) => parent.fullName,
    courses: (parent: any, args: any) => {
        return prisma.teacher.findUnique({
            where: { id: parent.id },
        }).courses();
    },
};

const Course = {
    id: (parent: any) => parent.id,
    code: (parent: any) => parent.code,
    title: (parent: any) => parent.title,
    description: (parent: any) => parent.description,
    teacher: (parent: any, args: any) => {
        return prisma.course.findUnique({
            where: { id: parent.id },
        }).teacher();
    },
    dept: (parent: any, args: any) => {
        return prisma.course.findUnique({
            where: { id: parent.id },
        }).dept();
    },
};

const resolvers = {
    Student,
    Department,
    Teacher,
    Course,
    Query,
    Mutation,
};


export default resolvers
