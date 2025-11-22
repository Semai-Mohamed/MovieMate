import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import MovieCard from "@/components/MovieCard";
import { SafeAreaView } from "react-native-safe-area-context";

const savedMovies: Movie[] = [
  {
    id: 1,
    title: "The Dark Knight",
    vote_average: 9.0,
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: "2008-07-16",
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    original_language: "en",
    original_title: "The Dark Knight",
    overview: "",
    popularity: 0,
    video: false,
    vote_count: 0,
  },
  {
    id: 2,
    title: "Inception",
    vote_average: 8.8,
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    release_date: "2010-07-15",
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    original_language: "en",
    original_title: "Inception",
    overview: "",
    popularity: 0,
    video: false,
    vote_count: 0,
  },
  {
    id: 3,
    title: "Interstellar",
    vote_average: 8.6,
    poster_path: "/gEU2QniL6C8zEfVIuM8nFrfhZDu.jpg",
    release_date: "2014-11-05",
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    original_language: "en",
    original_title: "Interstellar",
    overview: "",
    popularity: 0,
    video: false,
    vote_count: 0,
  },
];

const Saved = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className="px-5 my-5 flex-1">
        <Text className="text-2xl font-bold text-white mb-5">Saved Movies</Text>

        {savedMovies.length > 0 ? (
          <FlatList
            data={savedMovies}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
            contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View className="flex justify-center items-center flex-1 flex-col gap-5 mt-20">
            <Image
              source={icons.save}
              className="size-16 opacity-50"
              tintColor={"#fff"}
            />
            <Text className="text-gray-500 text-base">No saved movies yet</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Saved;
