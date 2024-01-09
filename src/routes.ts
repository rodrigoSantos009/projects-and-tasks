import { Router } from "express";
import { createProjectController } from "./useCases/Projects/createProject";
import { projectController } from "./useCases/Projects/projectUseCases";
import { createTaskController } from "./useCases/Tasks/createTask";
import { taskController } from "./useCases/Tasks/taskUseCases";

const router = Router()

// Projects Routes
router.post('/projects', (req, res) => {
  return createProjectController.handle(req, res)
})

router.get('/projects', (req, res) => {
  return projectController.getAllProjects(res)
})

router.get('/projects/:id', (req, res) => {
  return projectController.getProject(req, res)
})

router.patch('/projects/:id', (req, res) => {
  return projectController.updateProject(req, res)
})

router.delete('/projects/:id', (req, res) => {
  return projectController.deleteProject(req, res)
})

router.get("/summary", (req, res) => {
  return projectController.getSummary(req, res)
})

// Tasks routes
router.post('/projects/task', (req, res) => {
  return createTaskController.handle(req, res)
})

router.get('/tasks', (req, res) => {
  return taskController.getAllTasks(req, res)
})

router.get("/projects/:projectId/tasks", (req, res) => {
  return taskController.getTaskByProjectId(req, res);
});

router.delete('/tasks/:id', (req, res) => {
  return taskController.deleteTask(req, res)
}) 

router.put('/tasks/:id', (req, res) => {
  return taskController.taskToggle(req, res)
})

export { router }