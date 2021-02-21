

function paddingMarginTemplate(padding_element,margin_element) {
     
    var accordionCardBody = document.createElement('div');
    accordionCardBody.className = "card-body";

    var paddingLabel = document.createElement('label');
    paddingLabel.innerText = "Padding"
    accordionCardBody.appendChild(paddingLabel)
    accordionCardBody.appendChild(padding_element)

    var marginLabel = document.createElement('label');
    marginLabel.innerText = "Margin"
    accordionCardBody.appendChild(marginLabel)
    accordionCardBody.appendChild(margin_element)

    var accordionCardHeaderCollapse = document.createElement('div');
    accordionCardHeaderCollapse.className = "collapse show";
    accordionCardHeaderCollapse.id = "accordionCardHeaderCollapse";
    accordionCardHeaderCollapse.appendChild(accordionCardBody)

    var accordionCardHeaderH2Button = document.createElement('button');
    accordionCardHeaderH2Button.innerText = "Padding / Margin"
    accordionCardHeaderH2Button.classList.add('btn', 'btn-block', 'text-left')
    accordionCardHeaderH2Button.setAttribute('type',"button" )
    accordionCardHeaderH2Button.setAttribute("data-toggle","collapse" )
    accordionCardHeaderH2Button.setAttribute("data-target","#accordionCardHeaderCollapse" )

    var accordionCardHeaderH2 = document.createElement('h2');
    accordionCardHeaderH2.className = "mb-0"
    accordionCardHeaderH2.appendChild(accordionCardHeaderH2Button)

    var accordionCardHeader = document.createElement('div');
    accordionCardHeader.className = "card-header";
    accordionCardHeader.setAttribute("id", "accordionCardHeader");
    accordionCardHeader.appendChild(accordionCardHeaderH2)

    var accordionCard = document.createElement('div');
    accordionCard.className = "card";
    accordionCard.appendChild(accordionCardHeader)
    accordionCard.appendChild(accordionCardHeaderCollapse)
    
    var accordionMargin =  document.createElement('div')
    accordionMargin.appendChild(accordionCard)
    accordionMargin.classList.add( "accordion" , "mb-2" )
    
    return accordionMargin;
}