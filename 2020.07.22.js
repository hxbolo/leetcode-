/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  let i = 0
  while(num != 0){
    num = !(num % 2) ? num / 2 :  num - 1
    i++
  }
  return i
  
}

let b = numberOfSteps(8)
console.log(b);


// let i = 0
// var numberOfSteps  = function(num) {
//    i++
//    num = !(num % 2) ?  num / 2 :  num - 1

//    if(num) {
//      numberOfSteps(num)
//    } 
  
//   return i
  
// }


// 解释：
// 步骤 1) 14 是偶数，除以 2 得到 7 。
// 步骤 2） 7 是奇数，减 1 得到 6 。
// 步骤 3） 6 是偶数，除以 2 得到 3 。
// 步骤 4） 3 是奇数，减 1 得到 2 。
// 步骤 5） 2 是偶数，除以 2 得到 1 。
// 步骤 6） 1 是奇数，减 1 得到 0 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


let a =[
  {
    "assignment_id":102,
    "cycle_start_time":1595433600,
    "cycle_end_time":1626854964,
    "current_assignment_stage_id":201,
    "finish_start_time":1595491419,
    "finish_end_time":1626854964,
    "title":"TEST",
    "op_status":3,
    "finish_end_time_text":"截止时间：2021.07.21 16:09",
    "stage_list":[
        {
            "stage":1,
            "award_event_name":"奖励权益",
            "status":3,
            "send_award":0,
            "stage_reward_icon":"http://img2.haoshiqi.net/mad19201774ec17665831b3870d9047670.jpg",
            "sub_stage_task_icon":"http://img2.haoshiqi.net/ma61eba10d27ca5818dd8eec6238d4ff66.jpg",
            "limit_number":1,
            "finish_number":0,
            "finish_event_id":2,
            "finish_event_name":"完成支付"
        },
        {
            "stage":1,
            "award_event_name":"奖励权益",
            "status":3,
            "send_award":0,
            "stage_reward_icon":"http://img2.haoshiqi.net/mad19201774ec17665831b3870d9047670.jpg",
            "sub_stage_task_icon":"http://img2.haoshiqi.net/ma4af9ebed5421a6598c612c5fc2c4af81.jpg",
            "limit_number":1,
            "finish_number":0,
            "finish_event_id":3,
            "finish_event_name":"确认收货"
        },
        {
            "stage":2,
            "award_event_name":"奖励权益",
            "status":3,
            "send_award":0,
            "stage_reward_icon":"http://img2.haoshiqi.net/mad19201774ec17665831b3870d9047670.jpg",
            "sub_stage_task_icon":"http://img2.haoshiqi.net/ma61eba10d27ca5818dd8eec6238d4ff66.jpg",
            "limit_number":1,
            "finish_number":0,
            "finish_event_id":2,
            "finish_event_name":"完成支付"
        }
    ],
    "new_stage_list":[
        {
            "stage":1,
            "award_event_name":"奖励权益",
            "status":3,
            "send_award":0,
            "stage_reward_icon":"http://img2.haoshiqi.net/mad19201774ec17665831b3870d9047670.jpg",
            "sub_stage_task_icon":null,
            "finish_event_list":[
                {
                    "limit_number":1,
                    "finish_number":0,
                    "finish_event_id":2,
                    "finish_event_name":"完成支付",
                    "sub_stage_task_icon":"http://img2.haoshiqi.net/ma61eba10d27ca5818dd8eec6238d4ff66.jpg"
                },
                {
                    "limit_number":1,
                    "finish_number":0,
                    "finish_event_id":3,
                    "finish_event_name":"确认收货",
                    "sub_stage_task_icon":"http://img2.haoshiqi.net/ma4af9ebed5421a6598c612c5fc2c4af81.jpg"
                }
            ]
        },
        {
            "stage":2,
            "award_event_name":"奖励权益",
            "status":3,
            "send_award":0,
            "stage_reward_icon":"http://img2.haoshiqi.net/mad19201774ec17665831b3870d9047670.jpg",
            "sub_stage_task_icon":null,
            "finish_event_list":[
                {
                    "limit_number":1,
                    "finish_number":0,
                    "finish_event_id":2,
                    "finish_event_name":"完成支付",
                    "sub_stage_task_icon":"http://img2.haoshiqi.net/ma61eba10d27ca5818dd8eec6238d4ff66.jpg"
                }
            ]
        }
    ]
},
]
let  list  =  JSON.parse(a)
console.log(list);
