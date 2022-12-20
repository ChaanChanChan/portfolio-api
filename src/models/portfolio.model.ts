import { Request, Response } from 'express'
import { content } from './db.json'
import fs from 'fs'

const jsonContent = JSON.parse(fs.readFileSync('src/models/db.json', 'utf-8'))

export const dataBase = {
    getData: () => {
        return content
    },
    getPortfolio: () => {
        return content.portfolio
    },
    getProject: () => {
        return content.portfolio
    },
    postProject: (newProject) => {
        jsonContent.content.portfolio.push(newProject)
        console.log(jsonContent)
        fs.writeFileSync('src/models/db.json', JSON.stringify(jsonContent, null, 4), 'utf-8')
    }
}