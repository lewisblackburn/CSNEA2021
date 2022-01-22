import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutReviewsInput } from "../inputs/SongCreateNestedOneWithoutReviewsInput";
import { SongReviewLikeCreateNestedManyWithoutSongReviewInput } from "../inputs/SongReviewLikeCreateNestedManyWithoutSongReviewInput";

@TypeGraphQL.InputType("SongReviewCreateWithoutUserInput", {
  isAbstract: true
})
export class SongReviewCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateNestedManyWithoutSongReviewInput, {
    nullable: true
  })
  likes?: SongReviewLikeCreateNestedManyWithoutSongReviewInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutReviewsInput;
}
