const explorer = {
    id:crypto.randomUUID(),
    name:'root',
    isFolder: true,
    items:[
        {
            id:crypto.randomUUID(),
            name: "public",
            isFolder:true,
            items: [
                {
                    id:crypto.randomUUID(),
                    name: "public nested 1",
                    isFolder:true,
                    items: [
                        {
                            id:crypto.randomUUID(),
                            name:"index.html",
                            isFolder:false,
                            items:[]
                        },
                        {
                            id:crypto.randomUUID(),
                            name:"app.html",
                            isFolder:false,
                            items:[]
                        },
                         {
                            id:crypto.randomUUID(),
                            name:"test.txt",
                            isFolder:false,
                            items:[]
                        }
                    ]
                },
                {
                    id:crypto.randomUUID(),
                    name: "public nested 2",
                    isFolder:true,
                    items: [
                        {
                            id:crypto.randomUUID(),
                            name:"testing",
                            isFolder:true,
                            items:[
                                {
                                    id:crypto.randomUUID(),
                                    name: "text.txt",
                                    isFolder:false,
                                }
                            ]
                        },
                        {
                            id:crypto.randomUUID(),
                            name:"app.html",
                            isFolder:false,
                            items:[]
                        },
                        {
                            id:crypto.randomUUID(),
                            name:"test.txt",
                            isFolder:false,
                            items:[]
                        }
                    ]
                }
            ]
        }
    ]
} 