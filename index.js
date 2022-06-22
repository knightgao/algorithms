let allWay = []

export function getPath(data,start,end){
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
    if(!temp[start] || !temp[end]){
        return []
    }

    getWay(temp,[],start,end)

    return allWay
}



function getWay(data,way,start,target){
    if(!data[start]){
        return []
    }
    way.push(start)
    data[start] && data[start].forEach(
        (item)=>{
            if(item === target){
                way.push(item)
                allWay.push(way)
            } else {
                getWay(data,JSON.parse(JSON.stringify(way)),item,target)
            }
        }
    )
    // data[start].forEach((source)=>{
    //     // 如果存在下一个节点
    //     if(data[source] && data[source].length>0){
    //         data[source].forEach(
    //             (item)=>{
    //                 if(item === target){
    //
    //                 }
    //                 getWay(data,item,target)
    //             }
    //         )
    //
    //     }
    // })
}
