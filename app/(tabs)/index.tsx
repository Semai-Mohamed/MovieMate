import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, FlatList, Image, ScrollView,  Text,  View } from "react-native";
import {useRouter} from 'expo-router'
import SearchBar from "@/components/SearchBar";
import { useFetch } from "@/services/useFetch";
import { fetchMovie } from "@/services/api";
import MovieCard from "@/components/MovieCard";
export default function Index() {
  const router = useRouter();
  const {data : movies, loading : moviesLoading , error : moviesError} = useFetch(()=> fetchMovie({query : ''}));
  return (
   <View className="flex-1 bg-primary h-[400px]">
    <Image source={images.bg} className="absolute w-full z-0 "></Image>
    <ScrollView className="flex-1 px-5 " showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight : "100%",paddingBottom : 10}}>
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" ></Image>
      {moviesLoading ?(<ActivityIndicator size={'large'} color={"0000ff"} className="mt-10 self-center" ></ActivityIndicator>):moviesError ? (<Text>Error : {moviesError?.message}</Text>): <View className="flex-1 mt-5">
         <SearchBar onPress={() => router.push('/search')}></SearchBar>
         <><Text className="text-lg text-white font-bold mt-5 mb-3 ">Latest Movies</Text>
         <FlatList data={movies?.results} renderItem = {({item})=>(
         <MovieCard {...item}/>
         )} keyExtractor={(item) => item.id.toString()} 
         numColumns={3}
         columnWrapperStyle = {{justifyContent : 'flex-start' , gap : 20,paddingRight : 5,marginBottom : 10 ,display : 'flex',alignItems : 'center'}}
         className="mt-2 pb-32" scrollEnabled = {false}></FlatList>
         </>

      </View>}
     
    </ScrollView>
   </View>
  );
}

