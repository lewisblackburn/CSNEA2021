import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewCreateInput } from "../../../inputs/BookReviewCreateInput";
import { BookReviewUpdateInput } from "../../../inputs/BookReviewUpdateInput";
import { BookReviewWhereUniqueInput } from "../../../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookReviewArgs {
  @TypeGraphQL.Field(_type => BookReviewWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewCreateInput, {
    nullable: false
  })
  create!: BookReviewCreateInput;

  @TypeGraphQL.Field(_type => BookReviewUpdateInput, {
    nullable: false
  })
  update!: BookReviewUpdateInput;
}
