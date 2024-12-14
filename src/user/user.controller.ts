import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

@Controller("users")
export class UserController {

@Post()
async create(@Body() body) {
    return {
        body
    }
}

@Get()
async read() {
    return {
        users: []
    }
}

@Get(":id/:username")
async readOne(@Param() params){
    return {user:{
        params
    }}
}

@Put(":id")
async update(@Body() body, @Param() param) {
return {
    body,
    param
}
}

@Patch(":id")
async updatePatial(@Body() body, @Param() param){
    return {
        body,
        param
    }
}

@Delete(":id")
async del(@Param() param){
    return {
        param
    }
}
}