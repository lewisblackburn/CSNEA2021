import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSongReviewLikesInput } from "../inputs/UserUpdateOneRequiredWithoutSongReviewLikesInput";

@TypeGraphQL.InputType("SongReviewLikeUpdateWithoutSongReviewInput", {
  isAbstract: true
})
export class SongReviewLikeUpdateWithoutSongReviewInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSongReviewLikesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutSongReviewLikesInput | undefined;
}
