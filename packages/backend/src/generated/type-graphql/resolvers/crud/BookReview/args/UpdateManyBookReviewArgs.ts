import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewUpdateManyMutationInput } from "../../../inputs/BookReviewUpdateManyMutationInput";
import { BookReviewWhereInput } from "../../../inputs/BookReviewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookReviewArgs {
  @TypeGraphQL.Field(_type => BookReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookReviewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookReviewWhereInput, {
    nullable: true
  })
  where?: BookReviewWhereInput | undefined;
}
