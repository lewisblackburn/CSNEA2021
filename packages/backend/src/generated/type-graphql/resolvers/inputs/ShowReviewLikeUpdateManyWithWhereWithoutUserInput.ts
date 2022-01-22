import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeScalarWhereInput } from "../inputs/ShowReviewLikeScalarWhereInput";
import { ShowReviewLikeUpdateManyMutationInput } from "../inputs/ShowReviewLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("ShowReviewLikeUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewLikeUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowReviewLikeScalarWhereInput, {
    nullable: false
  })
  where!: ShowReviewLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShowReviewLikeUpdateManyMutationInput;
}
