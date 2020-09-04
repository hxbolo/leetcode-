var cityData = [
  {
    id: 1,
    name: '广东省',
    children: [
      {
        id: 11,
        name: '深圳',
        children: [
          {
            id: 111,
            name: '宝安',
            children: [
              {
                id: 1111,
                name: '西乡',
                children:[
                  {
                    id: 11111,
                    name: '坪洲',
                    children:[]
                  },
                  {
                    id: 11112,
                    name: '灵芝',
                    children:[]
                  }
                ]
              },
              {
                id: 1112,
                name: '南山',
                children:[
                  {
                    id: 11121,
                    name: '科技园',
                    children:[]
                  }
                ]
              }
            ]
          },
          {
            id: 112,
            name: '福田',
            children: []
          }
        ]
      },
      {
        id: 12,
        name: '广州',
        children: [
          {
            id: 122,
            name: '白云区',
            children: [
              {
                id: 1222,
                name: '白云区',
                children: []
              }
            ]
          },
          {
            id: 122,
            name: '珠海区',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '湖南省',
    children: []
  }
];

let result = ''
 
// 递归实现
const recursion = (cityData, id) => {
  // cityData数据为空的时候直接返回
  if (!cityData || !cityData.length) return;
  // 常规循环cityData
  for (let i = 0, len = cityData.length; i < len; i++) {
    const childs = cityData[i].children;
    
    // 如果匹配到id的话，就是我们要的结果
    if (cityData[i].id === id) {
      result = cityData[i].name
    }
    // 如果还有子节点，执行递归
    if(childs && childs.length > 0){
      recursion(childs, id);
    }
  }
  return result
};
 
const r = recursion(cityData, 11112);
console.log(r) // 灵芝