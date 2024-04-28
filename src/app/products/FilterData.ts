 export const filters = [
    {
    id: "color",
    
    name:"Color",
    
    options: [
    
    { value: "white", label: "White" }, 
    {value: "beige", label: "Beige"},
    
    {value: "blue", label: "Blue" },
    
    
    {value: "green", label: "Green" },
    
    {value: "purple", label: "Purple"}, 
    {value: "yellow", label: "Yellow"},],},
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"},
        ],},];
export const singleFilter=[
    {
        id: "discount",
        name: "Discount",
        options: [
          { value: "10", label: "10% off or more" },
          { value: "20", label: "20% off or more" },
          { value: "30", label: "30% off or more" },
          { value: "40", label: "40% off or more" },
          { value: "50", label: "50% off or more" }
        ],
    },
]