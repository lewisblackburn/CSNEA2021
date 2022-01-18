import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewCreateInput } from "../../../inputs/MovieReviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMovieReviewArgs {
  @TypeGraphQL.Field(_type => MovieReviewCreateInput, {
    nullable: false
  })
  data!: MovieReviewCreateInput;
}
