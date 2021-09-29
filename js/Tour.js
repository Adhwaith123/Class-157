AFRAME.registerComponent("tour",{
  init : function(){
    this.placesContainer=this.el
    // this.createBorder(position,id)
    // this.createThumbnail(item)
    this.createCards()

  },
  createCards: function() {
    const thumbnailref=[
      {id:"Taj-Mahal",
       title:"Taj Mahal",
       url:"./assets/thumbnails/taj_mahal.png"},
       {id:"Budapest",
        title:"Budapest",
        url:"./assets/thumbnails/budapest.png"},
        {id:"eiffelTower",
        title:"Eiffel Tower",
        url:"./assets/thumbnails/eiffel_tower.png"},
        {id:"newyorkcity",
        title:"New York City",
        url:"./assets/thumbnails/new_york_city.png"},
        
       ]
       let previousxPosition=-60
       for(var item of thumbnailref){
         const posx=previousxPosition+25
         const posy=10
         const posz=-40
         const position={x:posx,y:posy,z:posz}
         previousxPosition=posx
         const borderel=this.createBorder(position,item.id)
         const thumbnail=this.createThumbnail(item.url)
         borderel.appendChild(thumbnail)
         this.placesContainer.appendChild(borderel)
       }
 
  },
  createBorder: function(position,id) {
    const entityel=document.createElement("a-entity")
    entityel.setAttribute("id",id)
    entityel.setAttribute("visible",true)
    entityel.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
    entityel.setAttribute("position",position)
    entityel.setAttribute("material",{
      color:"red",
      opacity:0.4
    })
    return(entityel)
  },
  createThumbnail: function (item) {
    const entityel=document.createElement("a-entity")
    entityel.setAttribute("visible",true)
    entityel.setAttribute("geometry",{primitive:"circle",radius:9})
    entityel.setAttribute("material",{
      src:item.url
    })
  }
})