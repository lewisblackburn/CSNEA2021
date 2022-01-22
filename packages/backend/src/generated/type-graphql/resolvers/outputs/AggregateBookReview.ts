import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewAvgAggregate } from "../outputs/BookReviewAvgAggregate";
import { BookReviewCountAggregate } from "../outputs/BookReviewCountAggregate";
import { BookReviewMaxAggregate } from "../outputs/BookReviewMaxAggregate";
import { BookReviewMinAggregate } from "../outputs/BookReviewMinAggregate";
import { BookReviewSumAggregate } from "../outputs/BookReviewSumAggregate";

@TypeGraphQL.ObjectType("AggregateBookReview", {
  isAbstract: true
})
export class AggregateBookReview {
  @TypeGraphQL.Field(_type => BookReviewCountAggregate, {
    nullable: true
  })
  _count!: BookReviewCountAggregate | null;

  @TypeGraphQL.Field(_type => BookReviewAvgAggregate, {
    nullable: true
  })
  _avg!: BookReviewAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookReviewSumAggregate, {
    nullable: true
  })
  _sum!: BookReviewSumAggregate | null;

  @TypeGraphQL.Field(_type => BookReviewMinAggregate, {
    nullable: true
  })
  _min!: BookReviewMinAggregate | null;

  @TypeGraphQL.Field(_type => BookReviewMaxAggregate, {
    nullable: true
  })
  _max!: BookReviewMaxAggregate | null;
}
