import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ShowReviewLikeUpdateManyWithoutShowReviewInput } from "../inputs/ShowReviewLikeUpdateManyWithoutShowReviewInput";
import { ShowUpdateOneRequiredWithoutReviewsInput } from "../inputs/ShowUpdateOneRequiredWithoutReviewsInput";

@TypeGraphQL.InputType("ShowReviewUpdateWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  review?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeUpdateManyWithoutShowReviewInput, {
    nullable: true
  })
  likes?: ShowReviewLikeUpdateManyWithoutShowReviewInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateOneRequiredWithoutReviewsInput, {
    nullable: true
  })
  show?: ShowUpdateOneRequiredWithoutReviewsInput | undefined;
}
