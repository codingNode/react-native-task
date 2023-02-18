import { useRef, useEffect } from 'react';

export const SECTION_LIST_MOCK_DATA = [
    {
      title: 'Appetizers',
      data: [
        {
          id: '1',
          title: 'Pasta',
          price: '10',
        },
        {
          id: '3',
          title: 'Pizza',
          price: '8',
        },
      ],
    },
    {
      title: 'Salads',
      data: [
        {
          id: '2',
          title: 'Caesar',
          price: '2',
        },
        {
          id: '4',
          title: 'Greek',
          price: '3',
        },
      ],
    },
  ];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items. 
  // Each item has the following properties: "id", "title" and "price"
  // console.log("data: ", data)
  let list=[]
  let obj1={title: "Appetizers" , data:[]}
  let obj2={title: "Salads" , data:[]}
  let obj3={title: "Beverages" , data:[]}
   data.map((item)=>{
    if(item.category === "Appetizers")
    {
      let obj= {id: item.id, title: item.title, price: item.price}
      obj1.data.push(obj);

    }
    else if(item.category === "Salads")
    {
      let obj= {id: item.id, title: item.title, price: item.price}
      obj2.data.push(obj);
  
    }
    else if(item.category === "Beverages")
    {
      let obj= {id: item.id, title: item.title, price: item.price}
      obj3.data.push(obj);
    }
  })
  if(obj1.data.length !== 0)
  {
    list.push(obj1)
  }
  if(obj2.data.length !== 0)
  {
    list.push(obj2)
  }
  if(obj3.data.length !== 0)
  {
    list.push(obj3)
  }

  // console.log("generated list: ", list)
  return list;
}

export function useUpdateEffect(effect, dependencies = []) {
  
  let isInitialMount = useRef(true);
  // console.log("outside effect: ", isInitialMount);
  
  useEffect(() => {
    // console.log("inside effect: ", isInitialMount);
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect(); 
    }
  }, dependencies,[isInitialMount]);
}

