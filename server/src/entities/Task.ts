export class Task {
  constructor(
    public title: string,
    public projectId: string,
    public createdAt: Date,
    public finalDate: Date,
  ) {}
}