import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutActorInput } from "../inputs/MovieCreateNestedManyWithoutActorInput";
import { SongCreateNestedManyWithoutArtistInput } from "../inputs/SongCreateNestedManyWithoutArtistInput";
import { Career } from "../../enums/Career";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateWithoutBooksInput {
  @TypeGraphQL.Field(_type => Career, {
    nullable: false
  })
  type!: "AUTHOR" | "ARTIST" | "ACTOR";

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutActorInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutActorInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutArtistInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutArtistInput | undefined;
}