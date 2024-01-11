export default function(imageData){
     console.log(imageData)
    
    return(
<div>
        {
          imageData.imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
      )
}

