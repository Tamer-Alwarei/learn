let QElements = [
    {
        elementType : "q",
        htmltag : "div",
        className : ["header","s"],
        idName : "headerid",
        content : "",
        fontSize : "34px",
        border : "1px solid #ccc",
        borderRadius: "4px",
        style : {
            color : "yellow",
            margin : "20px auto",
            padding : "10px"
        },
        id: "mbox",
        noParent: true,
        parentId : "",
        template : '<div></div>'
    },
    {
        elementType : "q",
        htmltag : "div",
        content : "",
        defaultStyle : {},
        style : {},
        attrs : [{ "data-bind":"visible: layout.progressVisible"}],
        className : ["progressbar" ,"queueElement"],
        id : "MainPart_divProgressbar",
        noParent: false,
        parentId : "mbox",
        block : true,
        template : 
            `<div id="MainPart_divProgressbar" class="progressbar queueElement" data-bind="visible: layout.progressVisible">
                <div id="MainPart_divProgressbar_Progress" class="progress" style="overflow: hidden; width: 75%;">
                    <div id="MainPart_divProgressbar_Progress_Runner" class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>
                </div>
                <div id="MainPart_divProgressbar_Clear" class="clear"></div>
            </div>`,
        children : [
            {
                elementType : "q",
                htmltag : "div",
                content : "",
                defaultStyle : {},
                style : {
                    // border : "1px solid #ccc",
                    // borderRadius: "4px",
                    // fontSize : "34px",
                    // color : "red",
                    // margin : "20px auto",
                    // padding : "10px"
                    width: "70%"
                },
                attrs : [{ "style":"overflow: hidden; width: 75%;"}],
                className : ['progress'],
                id : "MainPart_divProgressbar_Progress",
                noParent: false,
                parentId : "MainPart_divProgressbar",
                block : true,
                template : `<div id="MainPart_divProgressbar_Progress" class="progress" style="overflow: hidden; width: 75%;">
                                <div id="MainPart_divProgressbar_Progress_Runner" class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>
                            </div>`,
                children : [
                    {
                        elementType : "q",
                        htmltag : "div",
                        content : "",
                        defaultStyle : {},
                        style : {
                            // border : "1px solid #ccc",
                            // borderRadius: "4px",
                            // fontSize : "34px",
                            // color : "red",
                            // margin : "20px auto",
                            // padding : "10px"
                        },
                        attrs : [{ "data-bind" : "css: { paused: layout.queueIsPausedVisible }" }],
                        className : ['runner'],
                        id : "MainPart_divProgressbar_Progress_Runner",
                        noParent: false,
                        parentId : "MainPart_divProgressbar_Progress",
                        block : true,
                        template : `<div id="MainPart_divProgressbar_Progress_Runner" class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>`
                    }]
            },
            {
                elementType : "q",
                htmltag : "div",
                content : "",
                defaultStyle : {},
                style : {
                    border : "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize : "34px",
                    color : "red",
                    margin : "20px auto",
                    padding : "10px"
                },
                attrs : [],
                className : ['progressbar'],
                id : "MainPart_divProgressbar_Clear",
                noParent: false,
                parentId : "MainPart_divProgressbar",
                block : false,
                template : `<div id="MainPart_divProgressbar_Clear" class="clear"></div>`
            }
        ]
    },
    {
        elementType : "q",
        htmltag : "div",
        className : ['header2' , 'mm'],
        idName : "headerid3",
        content : "The queue is for making ...",
        fontSize : "34px",
        border : "1px solid #ccc",
        borderRadius: "4px",
        noParent : false,
        id: "",
        parentId : "mbox",
        style : {
            color : "orange",
            margin : "20px auto",
            padding : "1px"
        },
        template : "<h2><span>Your queue number is: </span><span>45</span></h2>"
    }
    ,
    {
        elementType : "q",
        htmltag : "span",
        className : ['footer ss'],
        idName : "headerid3",
        content : "Last update is: 88",
        fontSize : "14px",
        border : "1px solid #ccc",
        borderRadius: "4px",
        noParent : false,
        id: "",
        parentId : "mbox",
        style : {
            color : "green",
            margin : "20px auto",
            padding : "1px"
        },
        template : "<h4><span>Last update is: 88 </span><span>45</span></h4>"
    }
]
;
let keysOptions = [
    {
        noParent: true,
        key : "content",
        elementType : "o",
        optionType : "content",
        htmltag : "input",
        style : {
            color : "#333",
            margin : "0px auto 10px",
            padding : "10px"
        }
    },
    {
        noParent: true,
        key : "width",
        elementType : "o",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 10px",
            padding : "10px"
        }
    },
    {
        noParent: true,
        key : "color",
        elementType : "o",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 10px",
            padding : "10px"
        }
    },
    {
        noParent: true,
        key : "padding",
        elementType : "o",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 10px",
            padding : "10px"
        }
    },
    {
        noParent: true,
        key : "margin",
        elementType : "o",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 10px",
            padding : "10px"
        }
    }
]