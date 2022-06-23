let allWay = []

export function getPath(data,start,end){
    // 初始化值
    allWay=[]
    let temp ={}
    // 预处理数据
    data.forEach(item=>{
        if(temp[item.source]){
            temp[item.source].push(item.target)
        } else {
            temp[item.source] = [item.target]
        }
    })
    // 检查数据合理性
    // if(!temp[start]){
    //     return []
    // }

    getWay(temp,[],start,end)

    return allWay
}



function getWay(data,way,start,target){
    // 检查数据合理性
    if(!data[start] && start!== target){
        return []
    }
    way.push(start)
    data[start] && data[start].forEach(
        (item)=>{
            if(item === target){
                way.push(item)
                allWay.push(way)
            } else {
                getWay(data,[...way],item,target)
            }
        }
    )
}
