let all_data = { 
    "components" : [ // old: d_QElements
    {
        elementType : "ee",
        htmltag : "div",
        elementDescription : "This element is the main box of all elements",
        allowNewElementOnIt : true,
        attrs : {
            class : ["mbox","s"],
            id: "mbox",
        },
        content : "children",
        //styleKeys : ["margin","padding"],
        style : {
            margin : "0px auto",
            padding : "15px",
            backgroundColor : '#fff',
            border : "1px solid #f1f1f1"
        },
        noParent: true,
        parentId : "",
        template : '<div></div>',
        belongToPage : "all",
        component : true,
        order : 1
    },
    {
        elementType : "ee",
        htmltag : "div",
        elementDescription : "This element is parent and component",
        allowNewElementOnIt : true,
        attrs : {
            class : ["flexdiv","divparent"],
            id: "comparent1",
        },
        content : "children",
        style : {
            margin : "0px auto",
            padding : "15px",
            backgroundColor : '#f9f9f9',
            border : "1px solid #f1f1f1"
        },
        noParent: false,
        parentId : "mbox",
        template : '<div></div>',
        belongToPage : "all",
        component : true,
        order : 1
    },
    {
        elementType : "ee",
        htmltag : "img",
        attrs : {
            class : ["logo","extraclass"],
            id: "logoid",
            // src: "https://www.accesscard.org.uk/wp-content/uploads/2016/02/ttf-logo-final-1.png"
            src: "https://www.audienceview.com/wp-content/uploads/2020/04/AV_MainLogo_2020-2-768x193-1.png"
        },
        content : "",
        //styleKeys : ["color","padding","fontSize","backgroundColor","border"],
        style : {
            width: "100%",
            padding: "35px",
            margin: "10px auto",
            color: "rgb(0, 0, 0)",
            fontSize: "30px",
            backgroundColor: "#fff",
            border: "1px dashed #ccc",
            // background: "url( https://asia-house.dk/wp-content/uploads/2017/02/Carlsberg-logo-vector-e1490862081165-1024x404.png )  no-repeat center center / 50% #f1f1f1"
        },
        noParent: false,
        parentId : "mbox",
        template : '<div></div>',
        belongToPage : "all"
    },
    {
        elementType : "ee",
        htmltag : "div",
        attrs : {
            class : ["header","extraclass"],
            id: "header",
        },
        content : "This is Text CONTECT q",
        //styleKeys : ["color","padding","fontSize","backgroundColor","border"],
        style : {
            color: "rgb(0, 0, 0)",
            padding: "35px",
            fontSize: "30px",
            backgroundColor: "#f1f1f1",
            border: "0px"
        },
        noParent: false,
        parentId : "mbox",
        template : '<div></div>',
        belongToPage : "queue"
    },
    {
        elementType : "ee",
        htmltag : "div",
        attrs : {
            class : ["header","extraclass"],
            id: "header-before",
        },
        content : "07 Minutes 4 seconds",
        //styleKeys : ["color","padding","fontSize","backgroundColor","border"],
        style : {
            color: "orange",
            padding: "35px",
            textAlign: "center",
            fontSize: "30px",
            border: "0px"
        },
        noParent: false,
        parentId : "mbox",
        template : '<div></div>',
        belongToPage : "before"
    },
    {
        elementType : "ee",
        elementDescription : "this element is for queue progress bar",
        htmltag : "div",
        content : "children",
        attrs : {
             "data-bind" : "visible: layout.progressVisible",
             id : "MainPart_divProgressbar",
             class : ["progressbar" ,"queueElement"],
            },
        defaultStyle : {},
        //styleKeys : [],
        style : {
            margin: '10px auto'
        },
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
        children : [],
        belongToPage : "queue"
    },{
        elementType : "ee",
        htmltag : "div",
        content : "",
        attrs : {
            class : ['progress'],
            id : "MainPart_divProgressbar_Progress",
            style : "overflow: hidden;"
        },
        defaultStyle : {},
        style : {
            width : "70%",
            backgroundColor : "#777777",
            backgroundImage : "linear-gradient(135deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent) !important"
        },
        noParent: false,
        parentId : "MainPart_divProgressbar",
        block : true,
        template : `<div id="MainPart_divProgressbar_Progress" class="progress" style="overflow: hidden; width: 75%;">
                        <div id="MainPart_divProgressbar_Progress_Runner" class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>
                    </div>`,
        children : [],
        belongToPage : "queue"
    },{
        elementType : "ee",
        htmltag : "div",
        attrs : { 
            id : "MainPart_divProgressbar_Progress_Runner",
            "data-bind" : "css: { paused: layout.queueIsPausedVisible }" ,
            class : ['runner'],
        },
        content : "",
        defaultStyle : {},
        //styleKeys : [],
        style : {},
        noParent: false,
        parentId : "MainPart_divProgressbar_Progress",
        block : true,
        template : `<div id="MainPart_divProgressbar_Progress_Runner" class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>`,
        belongToPage : "queue"
    },
    {
        elementType : "ee",
        htmltag : "div",
        attrs : {
            id : "MainPart_divProgressbar_Clear",
            class : ['progressbar'],
        },
        content : "",
        defaultStyle : {},
        //styleKeys : [],
        style : {},
        noParent: false,
        parentId : "MainPart_divProgressbar",
        block : false,
        template : `<div id="MainPart_divProgressbar_Clear" class="clear"></div>`,
        belongToPage : "queue"
    },
    {
        elementType : "ee",
        htmltag : "div",
        attrs : {
            id: "headerid3",
            class : ['header2' , 'mm'],
        },
        content : "Another CONTENT Text",
        noParent : false,
        parentId : "mbox",
        //styleKeys : ["color","margin","padding"],
        style : {
            color : "orange",
            margin : "20px auto",
            padding : "1px"
        },
        template : "<h2><span>Your queue number is: </span><span>45</span></h2>",
        belongToPage : "queue"
    }
    ,
    {
        elementType : "ee",
        htmltag : "span",
        attrs : {
            id: "",
            class : ['footer'],
        },
        content : "Just Number as CONTENT 99",
        noParent : false,
        parentId : "mbox",
        // styleKeys : ["color","margin","padding"],
        style : {
            color : "green",
            margin : "20px auto",
            padding : "1px"
        },
        template : "<h4><span>Last update is: 88 </span><span>45</span></h4>",
        belongToPage : "all"
    }
    ,
    {
        elementType : "ee",
        htmltag : "span",
        attrs : {
            id: "",
            class : ['footer2'],
        },
        content : "Thsi is for the BEFORE page",
        noParent : true,
        parentId : "mbox",
        // styleKeys : ["color","margin","padding"],
        style : {
            color : "blue",
            margin : "20px auto",
            padding : "1px"
        },
        template : "<h4><span>Last update is: 88 </span><span>45</span></h4>",
        belongToPage : "before"
    }
]};
let otherOption = {
    "content" :  {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        noParent: true,
        key : "content",
        elementType : "oe",
        optionType : "content",
        htmltag : "input",
        style : {}
    },
    "id" :  {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        noParent: true,
        key : "id",
        elementType : "oe",
        optionType : "id",
        htmltag : "input",
        style : {}
    },
    "class" :  {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        noParent: true,
        key : "class",
        elementType : "oe",
        optionType : "class",
        htmltag : "input",
        style : {}
    },
    "src" :  {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        noParent: true,
        key : "src",
        elementType : "oe",
        optionType : "class",
        htmltag : "input",
        style : {}
    }
}
let d_keysOptions = {
    "width" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "width",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "height" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "height",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "color": {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "color",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "padding" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "padding",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "margin" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "margin",
        content : "",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "display" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "display",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "backgroundColor" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "backgroundColor",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "backgroundImage" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "url( image url between the practice )",
        noParent: true,
        key : "backgroundImage",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
        }
    },
    "background" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "url( image url between the practice )",
        noParent: true,
        key : "background",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "border" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "border",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "textAlign" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "textAlign",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "fontSize" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "fontSize",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "fontWeight" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "fontWeight",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    },
    "fontFamily" : {
        attrs : {
            class : ['form-control','form-control-sm'],
        },
        content : "",
        noParent: true,
        key : "fontFamily",
        elementType : "oe",
        optionType : "style",
        htmltag : "input",
        style : {
            color : "gray",
            margin : "0px auto 5px",
            
        }
    }
}

let options_keys_only = {   
    "width" : true ,
    "height" : true ,
    "color" : true ,
    "padding" : true ,
    "margin" : true ,
    "display" : true ,
    "backgroundColor" : true ,
    "backgroundImage": true ,
    "border": true,
    "fontSize" : true
}

const d_pages = ['before','queue','after','error'];