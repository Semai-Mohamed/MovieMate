import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { fetchMovieDetails } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { icons } from "@/constants/icons";

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}
const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-200 font-bold text-sm mt-2">
      {value ?? "N/A"}
    </Text>
  </View>
);
const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const {
    data: movie,
    loading,
    error,
  } = useFetch(() => fetchMovieDetails(id as string));
  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          ></Image>
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5 ">
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm ">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-light-200 text-sm">{movie?.runtime} min</Text>
          </View>
          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="w-4 h-4"></Image>
            <Text className="text-white font-bold text-sm">
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text className="text-light-200 text-sm ">
              ({movie?.vote_count} votes)
            </Text>
          </View>
        </View>
        <MovieInfo label="Overview" value={movie?.overview}></MovieInfo>
        <MovieInfo
          label="Genres"
          value={movie?.genres?.map((genre) => genre.name).join("-") || "N/A"}
        ></MovieInfo>
        <View className="flex flex-row justify-between w-1/2">
          <MovieInfo
            label="Budget"
            value={movie?.budget ? `$${movie.budget / 1000000}M` : "N/A"}
          ></MovieInfo>
          <MovieInfo
            label="Revenue"
            value={
              movie?.revenue
                ? `$${Math.round(movie.revenue / 1000000)}m`
                : "N/A"
            }
          ></MovieInfo>
        </View>
        <MovieInfo
          label="Production Companies"
          value={
            movie?.production_companies.map((c) => c.name).join("-") || "N/A"
          }
        ></MovieInfo>
        <TouchableOpacity
          className=" absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
          onPress={router.back}
        >
          <Image
            source={icons.arrow}
            className="size-5 mr-1 mt-0.5 rotate-180 "
            tintColor={"#fff"}
          ></Image>
          <Text className="text-white font-semibold text-base">Go back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
