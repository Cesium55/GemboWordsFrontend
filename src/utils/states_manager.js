

function class_by_relation(rel){
    if (rel==null || rel.state==0){
        return "new"
    }
    const states = {
        1: "learning",
        2: "problematic",
        3: "learned",
        4: "known"
    }

    const class_ = states[rel.state]

    if (class_!=undefined) return class_
    return ""
}

function state_description_by_relation(rel){
    if (rel==null || rel.state==0){
        return "New word"
    }

    const descriptions = {
        1: "Learning word",
        2: "Learning word (problematic)",
        3: "Word has been learned",
        4: "Word already known"
    }

    let desc = descriptions[rel.state]

    if (desc==undefined) return ""

    if (rel.state==1 || rel.state == 2) desc = desc + " (Repeated " + rel.repeat_iteration + " times)" 


    return desc
}


export {class_by_relation, state_description_by_relation}