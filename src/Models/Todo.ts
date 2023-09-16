class Todo
{
    text:string;
    id:String;

    constructor(todoText:string)
    {
        this.text=todoText;
        this.id=new Date().toISOString();
    }

}

export default Todo;