import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'



function MovieCrew({ item, navigation }){



function movieCrewItem({ item }){
return (
<View style={styles.movie_crew_item}>
<Image
    style={styles.crew_member}
    source={{uri: item.crew_member}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.crew_member_name} numberOfLines={1}>{item.crew_member_name}</Text>
<Text style={styles.crew_member_role} numberOfLines={1}>{item.crew_member_role}</Text>
</View>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.movie_crew}
    data={item}
    renderItem={movieCrewItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default MovieCrew;

const styles = StyleSheet.create({
    "crew_member": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "crew_member_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "crew_member_role": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});