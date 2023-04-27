import { Component } from "react";
class Slider extends Component{
     
     arr=["images/hhh.jpg","images/hhh2.jpg","images/hhh3.jpg","images/hhh4.jpg"];
     
     constructor(){
        super();
        this.state={
            i:0,
            srcimge:this.arr[0]
        }
      }
     next=()=>
    {
    
        this.setState({
            i:(++this.state.i)%4,
            srcimge:this.arr[this.state.i]

    });
    

}
 
     previous=()=>
   {
    this.setState({
        i:(--this.state.i+4)%4,
        srcimge:this.arr[this.state.i]

});
   }
    render(){
        return(
<div className="slider">
            <div className="d-flex justify-content-center align-items-center">
            <i  onClick={this.previous} tabindex="0" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></i>
                <div className="slider-content d-flex justify-content-center">
                    <img src={this.state.srcimge} style={{ height:"500px"}} className="slider-img" alt=""/>
                </div>
                    
                <i onClick={this.next} tabindex="0" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></i>
                
            </div>
        </div>
        );
    };
}
export default Slider;