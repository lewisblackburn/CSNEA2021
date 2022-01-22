import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateWithoutBookInput } from "../inputs/BookReviewCreateWithoutBookInput";
import { BookReviewUpdateWithoutBookInput } from "../inputs/BookReviewUpdateWithoutBookInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class BookReviewUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => BookReviewWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewUpdateWithoutBookInput, {
    nullable: false
  })
  update!: BookReviewUpdateWithoutBookInput;

  @TypeGraphQL.Field(_type => BookReviewCreateWithoutBookInput, {
    nullable: false
  })
  create!: BookReviewCreateWithoutBookInput;
}
