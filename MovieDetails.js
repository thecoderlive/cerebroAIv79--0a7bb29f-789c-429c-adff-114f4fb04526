import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './movie_details_data'
import MovieCast from './MovieCast'
import MovieCrew from './MovieCrew'

function MovieDetails({ navigation, route }){ 
const url = (api.movie_details ?? "movie_details/") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state

const onPressAddToWatchlist = () => {}
const onPressMarkAsWatched = () => {}
const onPressRateMovie = () => {}
const onPressWriteReview = () => {}

async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id || !Array.isArray(json) ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.movie_details} showsVerticalScrollIndicator={false}>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.movie_poster}
    source={{uri: item.movie_poster}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.movie_title} numberOfLines={1}>{item.movie_title}</Text>
<Text style={styles.movie_release_date} numberOfLines={1}>{item.movie_release_date}</Text>
<Text style={styles.movie_runtime} numberOfLines={1}>{item.movie_runtime}</Text>
</View>
<View style={{flexDirection: 'row'}}>
<Text style={styles.movie_genre} numberOfLines={1}>{item.movie_genre}</Text>
<Text style={styles.movie_rating} numberOfLines={1}>{item.movie_rating}</Text>
</View>
<Text style={styles.movie_synopsis}>{item.movie_synopsis}</Text>
</View>
<MovieCast item={'movie_cast' in item ? item.movie_cast: item} navigation={navigation}/>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.movie_poster}
    source={{uri: item.movie_poster}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.movie_title} numberOfLines={1}>{item.movie_title}</Text>
<Text style={styles.movie_release_date} numberOfLines={1}>{item.movie_release_date}</Text>
<Text style={styles.movie_runtime} numberOfLines={1}>{item.movie_runtime}</Text>
</View>
<View style={{flexDirection: 'row'}}>
<Text style={styles.movie_genre} numberOfLines={1}>{item.movie_genre}</Text>
<Text style={styles.movie_rating} numberOfLines={1}>{item.movie_rating}</Text>
</View>
<Text style={styles.movie_synopsis}>{item.movie_synopsis}</Text>
</View>
<MovieCrew item={'movie_crew' in item ? item.movie_crew: item} navigation={navigation}/>
<Image
    style={styles.movie_poster}
    source={{uri: item.movie_poster}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.movie_title} numberOfLines={1}>{item.movie_title}</Text>
<Text style={styles.movie_release_date} numberOfLines={1}>{item.movie_release_date}</Text>
<Text style={styles.movie_runtime} numberOfLines={1}>{item.movie_runtime}</Text>
</View>
<View style={{flexDirection: 'row'}}>
<Text style={styles.movie_genre} numberOfLines={1}>{item.movie_genre}</Text>
<Text style={styles.movie_rating} numberOfLines={1}>{item.movie_rating}</Text>
</View>
<Text style={styles.movie_synopsis}>{item.movie_synopsis}</Text>
<View style={{flexDirection: 'row'}}>
<TouchableOpacity  onPress={onPressAddToWatchlist}>
    <View style={styles.add_to_watchlist}>{'Add To Watchlist'}</View>
</TouchableOpacity>
<TouchableOpacity  onPress={onPressMarkAsWatched}>
    <View style={styles.mark_as_watched}>{'Mark As Watched'}</View>
</TouchableOpacity>
</View>
<View style={{flexDirection: 'row'}}>
<TouchableOpacity  onPress={onPressRateMovie}>
    <View style={styles.rate_movie}>{'Rate Movie'}</View>
</TouchableOpacity>
<TouchableOpacity  onPress={onPressWriteReview}>
    <View style={styles.write_review}>{'Write Review'}</View>
</TouchableOpacity>
</View>
</ScrollView>
)}

export default MovieDetails;

const styles = StyleSheet.create({
    "center": {
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "center"
    },
    "rate_movie": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "movie_genre": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "movie_title": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "movie_poster": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "movie_rating": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "write_review": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "movie_runtime": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "movie_synopsis": {
        "fontSize": 12,
        "marginTop": 5,
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "mark_as_watched": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "add_to_watchlist": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "movie_release_date": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});