import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewAvgAggregate } from "../outputs/MovieReviewAvgAggregate";
import { MovieReviewCountAggregate } from "../outputs/MovieReviewCountAggregate";
import { MovieReviewMaxAggregate } from "../outputs/MovieReviewMaxAggregate";
import { MovieReviewMinAggregate } from "../outputs/MovieReviewMinAggregate";
import { MovieReviewSumAggregate } from "../outputs/MovieReviewSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovieReview", {
  isAbstract: true
})
export class AggregateMovieReview {
  @TypeGraphQL.Field(_type => MovieReviewCountAggregate, {
    nullable: true
  })
  _count!: MovieReviewCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewAvgAggregate, {
    nullable: true
  })
  _avg!: MovieReviewAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewSumAggregate, {
    nullable: true
  })
  _sum!: MovieReviewSumAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewMinAggregate, {
    nullable: true
  })
  _min!: MovieReviewMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewMaxAggregate, {
    nullable: true
  })
  _max!: MovieReviewMaxAggregate | null;
}
