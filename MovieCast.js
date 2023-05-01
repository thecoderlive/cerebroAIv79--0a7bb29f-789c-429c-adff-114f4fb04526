import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'



function MovieCast({ item, navigation }){



function movieCastItem({ item }){
return (
<View style={styles.movie_cast_item}>
<Image
    style={styles.cast_member}
    source={{uri: item.cast_member}}
    />
<Text style={styles.cast_member_name} numberOfLines={1}>{item.cast_member_name}</Text>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.movie_cast}
    data={item}
    renderItem={movieCastItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default MovieCast;

const styles = StyleSheet.create({
    "cast_member": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "cast_member_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});