import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewCreateManyInput } from "../../../inputs/BookReviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookReviewArgs {
  @TypeGraphQL.Field(_type => [BookReviewCreateManyInput], {
    nullable: false
  })
  data!: BookReviewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
