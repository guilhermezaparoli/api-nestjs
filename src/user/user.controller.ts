import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-copy.dto";

@Controller("users")
export class UserController {

@Post()
async create(@Body() {email, name, password}: CreateUserDTO) {
    return {
        name, 
        email,
        password
    }
}

@Get()
async read() {
    return {
        users: []
    }
}

@Get(":id/:username")
async readOne(@Param("id", ParseIntPipe) id){
    return {user:{
        id
    }}
}

@Put(":id")
async update(@Body() {email, name, password}: UpdatePutUserDTO, @Param("id", ParseIntPipe) id) {
return {
    email, 
    name,
    password,
    id
}
}

@Patch(":id")
async updatePatial(@Body() {email, name, password}: UpdatePatchUserDTO, @Param("id", ParseIntPipe) id){
    return {
        email, 
    name,
    password,
    id
    }
}

@Delete(":id")
async del(@Param("id", ParseIntPipe) id){
    return {
        id
    }
}
}

